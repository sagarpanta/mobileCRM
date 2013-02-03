class PlayersController < ApplicationController

  # GET /players
  # GET /players.json
  def index
    @players = Player.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @players }
    end
  end

  # GET /players/1
  # GET /players/1.json
  def show
    @player = Player.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @player }
    end
  end

  # GET /players/new
  # GET /players/new.json
  def new
    @player = Player.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @player }
    end
  end

  # GET /players/1/edit
  def edit
    @player = Player.find(params[:id])
  end

  # POST /players
  # POST /players.json
  def create
    @player = Player.new(params[:player])

    respond_to do |format|
      if @player.save
        format.html { redirect_to @player, notice: 'Player was successfully created.' }
        format.json { render json: @player, status: :created, location: @player }
      else
        format.html { render action: "new" }
        format.json { render json: @player.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /players/1
  # PUT /players/1.json
  def update
    @player = Player.find(params[:id])

    respond_to do |format|
      if @player.update_attributes(params[:player])
        format.html { redirect_to @player, notice: 'Player was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @player.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /players/1
  # DELETE /players/1.json
  def destroy
    @player = Player.find(params[:id])
    @player.destroy

    respond_to do |format|
      format.html { redirect_to players_url }
      format.json { head :no_content }
    end
  end
  
   def player_home
	if !signed_in?
		redirect_to signin_path
	else
		@player = current_player
		@bulbs = Notification.where('playerid = ?' , current_player.playerid).sum(:bulb)
		@last_offer_date = Offer.where('playerid = ?' , current_player.playerid).maximum(:created_at)
		@last_event_date = Event.where('playerid = ?' , current_player.playerid).maximum(:created_at)
		@last_promotion_date = Promotion.where('playerid = ?' , current_player.playerid).maximum(:created_at)
		@last_notification_date = Notification.where('playerid = ?' , current_player.playerid).maximum(:created_at)
		
		respond_to do |format|
			format.mobile
			format.json { head :no_content }
		end
	end
  end
  

   def test
	    respond_to do |format|
		format.html 
		format.json { head :no_content }
		end
	end
	



  
  
end
