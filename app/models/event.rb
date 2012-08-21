class Event < ActiveRecord::Base
  attr_accessible :code, :description, :enddate, :playerid, :read, :startdate
  
 
 def mark_as_read
	update_attribute(:read, 1)
 end
 
  def self.mark_as_read(x)
	y = Event.find_by_id(x)
	y.read = 1
	y.save
 end
 
 
   def mark(x)
	update_attribute(:read, x)
	return x
  end
 
end
