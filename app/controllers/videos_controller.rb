class VideosController < ApplicationController

  def index
    @video = Video.new
    @community = Community.find(params[:community_id])
    @videos = @community.videos.includes(:user).order(created_at: :desc)
  end

  def create
    @community = Community.find(params[:community_id])
    @video = @community.videos.new(video_params)
    if @video.save
      redirect_to community_videos_path(@community)
    else
      @videos = @communty.videos.includes(:user)
      render index
    end
  end

  # def search
  #   recipe = params[:recipe]
  #   params = URI.encode_www_form({recipe: recipe})
    
  #   response = Net::HTTP.get_response(uri)
  #   result = JSON.parse(response.body)
    
  # end

  private
  def video_params
    params.require(:video).permit(:content, :video).merge(user_id: current_user.id)
  end
end
