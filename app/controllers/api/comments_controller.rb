class Api::CommentsController < ApplicationController
   skip_before_action :verify_authenticity_token

    def index
        @comments = Comment.all
    end

    def show 
        @comment = Comment.find(params[:id])
    end

    def create
        # debugger
        @comment = Comment.new(comment_params)
        if@comment.save!
            render "api/comments/show"
        else
            render json: @comment.errors.full_messages, status: 401
        end
    end

    def destroy
        # debugger
        @comment = Comment.find(params[:id])
        if @comment.destroy
            render json: {id: params[:id]}
        end
    end

    private

    def comment_params
        #debugger
        params.require(:comment).permit(:comment,:userId, :pictureId, :username)
    end

end