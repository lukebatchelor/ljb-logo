# Language Reference

There are lots of different implementations of Logo with vastly different languages. 

This document will server as the reference for which parts of the language I'm supporting

### Turtle Commands

* forward `expr` 
    * or fd `expr`
    * Move turtle forward `expr` pixels
    ```
    fd 100
    ```

back `expr`
bk `expr`
Move turtle backward `expr` pixels
bk 100
left `expr`
lt `expr`
Rotate `expr` degrees counterclockwise
lt 90
right `expr`
rt `expr`
Rotate `expr` degrees clockwise
rt 90
setpos [ `expr` `expr` ]
setxy `expr` `expr`
setx `expr`
sety `expr`
Move turtle to the specified location
setpos [ 100 -100 ]
setxy -100 100
setheading `expr`
seth `expr`
Rotate the turtle to the specified heading
setheading 45
home
Moves the turtle to center, pointing upwards
arc angle radius
Without moving the turtle, draws an arc centered on the turtle, starting at the turtle's heading.
arc 180 100