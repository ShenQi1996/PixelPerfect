class Api::PicturesController < ApplicationController

    def show 
        # debugger
        @picture = Picture.find(params[:id])
        render :show
    end

   def index
        #debugger
        @pictures = Picture.all
        render :index
   end

   def create 
    # debugger
        @picture = Picture.new(picture_params)
        if @picture.save && @picture.ownerId == current_user.id 
            render "api/pictures/show"
        else
            render json: @picture.errors.full_messages, status: 401
        end
   end

   def destroy
        # debugger
        @picture = Picture.find(params[:id])
        if @picture.ownerId == current_user.id
            @picture.destroy
            render "api/pictures/show"
        end
   end

   private

   def picture_params
    params.require(:picture).permit(:title, :description, :ownerId, :photo)
   end

end
