class Promotion < ActiveRecord::Base
  attr_accessible :code, :description, :drawingtime, :endate, :num_of_entries, :playerid, :read, :startdate
  
  
  
 def mark_as_read
	update_attribute(:read, 1)
 end
 
  def self.mark_as_read(x)
	y = Promotion.find_by_id(x)
	y.read = 1
	y.save
 end
  
end
