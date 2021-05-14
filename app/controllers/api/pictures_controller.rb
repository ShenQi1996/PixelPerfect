class Api::PicturesController < ApplicationController

    def show 
        #debugger
        @picture = Picture.find(params[:id])
        render :show
    end

end
