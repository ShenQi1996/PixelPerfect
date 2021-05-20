class Api::LikesController < ApplicationController
    
    def index
        @likes = Like.all
    end

    def show 
        @like = Like.find(params[:id])
    end

    def create
        # debugger
        @like = Like.new(like_params)
        if@like.save
            render "api/likes/show"
        else
            render json: @like.errors.full_messages, status: 401
        end
    end

    def destroy
        # debugger
        @like = Like.find(params[:id])
        if @like.destroy
            render json: {id: params[:id]}
        end
    end

    private

    def like_params
        params.require(:like).permit(:userId, :pictureId)
    end

end