import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { apiRequest } from "@/lib/queryClient";
import { 
  type Video, 
  type VideoFormData, 
  insertVideoSchema,
  updateVideoSchema
} from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { 
  Plus, 
  Edit2, 
  Trash2, 
  Star, 
  Eye, 
  EyeOff, 
  Loader2,
  Youtube,
  Play
} from "lucide-react";

export function VideoManager() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [editingVideo, setEditingVideo] = useState<Video | null>(null);
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const { data: videos = [], isLoading } = useQuery<Video[]>({
    queryKey: ['/api/videos'],
  });

  // Calculate statistics
  const totalVideos = videos.length;
  const musicVideos = videos.filter(v => v.category === 'music').length;
  const corporateVideos = videos.filter(v => v.category === 'corporate').length;
  const featuredVideos = videos.filter(v => v.isFeatured).length;

  const createMutation = useMutation({
    mutationFn: async (data: VideoFormData) => {
      const response = await apiRequest('POST', '/api/admin/videos', data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/videos'] });
      setIsCreateDialogOpen(false);
      toast({
        title: "Success",
        description: "Video created successfully"
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to create video",
        variant: "destructive"
      });
    }
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: Partial<VideoFormData> }) => {
      const response = await apiRequest('PUT', `/api/admin/videos/${id}`, data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/videos'] });
      setEditingVideo(null);
      toast({
        title: "Success",
        description: "Video updated successfully"
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to update video",
        variant: "destructive"
      });
    }
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await apiRequest('DELETE', `/api/admin/videos/${id}`);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/videos'] });
      toast({
        title: "Success",
        description: "Video deleted successfully"
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to delete video",
        variant: "destructive"
      });
    }
  });

  const quickToggleMutation = useMutation({
    mutationFn: async ({ id, field, value }: { id: number; field: string; value: boolean }) => {
      const response = await apiRequest('PUT', `/api/admin/videos/${id}`, { [field]: value });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/videos'] });
    }
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
        <span className="ml-2 text-muted-foreground">Loading videos...</span>
      </div>
    );
  }

  const handleQuickToggle = (id: number, field: string, currentValue: boolean) => {
    quickToggleMutation.mutate({ id, field, value: !currentValue });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Video Management</h2>
          <p className="text-sm text-gray-600">
            Manage your music videos, corporate videos, and featured content
          </p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2" data-testid="button-add-video">
              <Plus className="w-4 h-4" />
              Add Video
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Video</DialogTitle>
            </DialogHeader>
            <VideoForm
              onSubmit={(data) => createMutation.mutate(data)}
              isLoading={createMutation.isPending}
              onCancel={() => setIsCreateDialogOpen(false)}
            />
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{totalVideos}</div>
            <p className="text-xs text-muted-foreground">Total Videos</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{musicVideos}</div>
            <p className="text-xs text-muted-foreground">Music Videos</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{corporateVideos}</div>
            <p className="text-xs text-muted-foreground">Corporate Videos</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{featuredVideos}</div>
            <p className="text-xs text-muted-foreground">Featured Videos</p>
          </CardContent>
        </Card>
      </div>

      {/* Videos List */}
      <div className="space-y-4">
        {Array.isArray(videos) && videos.length > 0 ? (
          videos.map((video: Video) => (
            <Card key={video.id} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-lg">{video.title}</h3>
                      <Badge variant={video.category === 'music' ? 'default' : 'secondary'}>
                        {video.category}
                      </Badge>
                      {video.isFeatured && (
                        <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                      {!video.isActive && (
                        <Badge variant="outline" className="text-gray-500">
                          <EyeOff className="w-3 h-3 mr-1" />
                          Hidden
                        </Badge>
                      )}
                    </div>
                    
                    {video.description && (
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {video.description}
                      </p>
                    )}

                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      {video.youtubeId && (
                        <div className="flex items-center gap-1">
                          <Youtube className="w-4 h-4" />
                          <span>YouTube: {video.youtubeId}</span>
                        </div>
                      )}
                      {video.vimeoId && (
                        <div className="flex items-center gap-1">
                          <Play className="w-4 h-4" />
                          <span>Vimeo: {video.vimeoId}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 ml-4">
                    {/* Quick Toggle Buttons */}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleQuickToggle(video.id, 'isActive', video.isActive || false)}
                      data-testid={`button-toggle-active-${video.id}`}
                    >
                      {video.isActive ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleQuickToggle(video.id, 'isFeatured', video.isFeatured || false)}
                      data-testid={`button-toggle-featured-${video.id}`}
                    >
                      <Star className={`w-4 h-4 ${video.isFeatured ? 'text-yellow-500 fill-current' : ''}`} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setEditingVideo(video)}
                      data-testid={`button-edit-${video.id}`}
                    >
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteMutation.mutate(video.id)}
                      disabled={deleteMutation.isPending}
                      data-testid={`button-delete-${video.id}`}
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-12">
                <Play className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-muted-foreground mb-2">
                  No videos yet
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get started by adding your first video to the system.
                </p>
                <Button onClick={() => setIsCreateDialogOpen(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Your First Video
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Edit Dialog */}
      <Dialog open={!!editingVideo} onOpenChange={() => setEditingVideo(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Video</DialogTitle>
          </DialogHeader>
          {editingVideo && (
            <VideoForm
              video={editingVideo}
              onSubmit={(data) => updateMutation.mutate({ id: editingVideo.id, data })}
              isLoading={updateMutation.isPending}
              onCancel={() => setEditingVideo(null)}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

interface VideoFormProps {
  video?: Video;
  onSubmit: (data: VideoFormData) => void;
  isLoading: boolean;
  onCancel: () => void;
}

function VideoForm({ video, onSubmit, isLoading, onCancel }: VideoFormProps) {
  const form = useForm<VideoFormData>({
    resolver: zodResolver(insertVideoSchema),
    defaultValues: {
      title: video?.title || "",
      description: video?.description || "",
      youtubeId: video?.youtubeId || "",
      vimeoId: video?.vimeoId || "",
      thumbnailUrl: video?.thumbnailUrl || "",
      category: video?.category || "music",
      isFeatured: video?.isFeatured || false,
      displayOrder: video?.displayOrder || 0,
      isActive: video?.isActive !== false,
    },
  });

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title *</Label>
          <Input
            id="title"
            {...form.register("title")}
            placeholder="Video title"
            data-testid="input-video-title"
          />
          {form.formState.errors.title && (
            <p className="text-sm text-red-500">{form.formState.errors.title.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Category *</Label>
          <Select
            value={form.watch("category") || "music"}
            onValueChange={(value) => form.setValue("category", value as "music" | "corporate")}
          >
            <SelectTrigger data-testid="select-video-category">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="music">Music Videos</SelectItem>
              <SelectItem value="corporate">Corporate Videos</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          {...form.register("description")}
          placeholder="Video description"
          rows={3}
          data-testid="textarea-video-description"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="youtubeId">YouTube Video ID</Label>
          <Input
            id="youtubeId"
            {...form.register("youtubeId")}
            placeholder="e.g., dQw4w9WgXcQ"
            data-testid="input-youtube-id"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="vimeoId">Vimeo Video ID</Label>
          <Input
            id="vimeoId"
            {...form.register("vimeoId")}
            placeholder="e.g., 123456789"
            data-testid="input-vimeo-id"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="thumbnailUrl">Thumbnail URL</Label>
        <Input
          id="thumbnailUrl"
          {...form.register("thumbnailUrl")}
          placeholder="https://example.com/thumbnail.jpg"
          data-testid="input-thumbnail-url"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="flex items-center space-x-2">
          <Switch
            id="featured"
            checked={form.watch("featured") || false}
            onCheckedChange={(checked) => form.setValue("featured", checked)}
            data-testid="switch-featured"
          />
          <Label htmlFor="featured">Featured</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="isActive"
            checked={form.watch("isActive") !== false}
            onCheckedChange={(checked) => form.setValue("isActive", checked)}
            data-testid="switch-active"
          />
          <Label htmlFor="isActive">Active</Label>
        </div>

        <div className="space-y-2">
          <Label htmlFor="displayOrder">Display Order</Label>
          <Input
            id="displayOrder"
            type="number"
            {...form.register("displayOrder", { valueAsNumber: true })}
            placeholder="0"
            data-testid="input-display-order"
          />
        </div>
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          data-testid="button-cancel"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          disabled={isLoading}
          data-testid="button-save"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            video ? "Update Video" : "Create Video"
          )}
        </Button>
      </div>
    </form>
  );
}