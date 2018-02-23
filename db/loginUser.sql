select * from properties
join users on properties.user_id = users.id
where username like $1;