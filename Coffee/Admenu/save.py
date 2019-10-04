#!python

import cgi
form = cgi.FieldStorage()
title = form["id"].value
description = form['price'].value

opened_file = open('data/'+title, 'w')
opened_file.write(description)
opened_file.close()

#Redirection
print("Location:menu_add_re.html")
print()
