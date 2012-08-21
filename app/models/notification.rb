class Notification < ActiveRecord::Base
  attr_accessible :code, :description, :notification, :notificationid , :read
  
   def mark_as_read
	update_attribute(:read, 1)
   end
   
   def self.mark_as_read(playerid, notificationid, notification)
	notification = Notification.where('playerid=? and notificationid=? and notification=?',playerid, notificationid, notification)
	notification[0].read = 1
	notification[0].save
   end
   
   def set_bulb_to_zero
		update_attribute(:bulb, 0)
   end
  
end
