# About this simple_form React App

**What`s Complex About Forms?**
Forms might be simple and trivial but they are not.
Forms can actually be complex from a developer`s point of view because forms and its inputs can assume a broad variety of different states. 
One or more inputs could be invalid or valid.
And these are only two states it`s even possible that you could have forms where the state is unknown becuase maybe you have some asynchronous validation
where you need to send the request to a server behind the scenes to check something to find out if a certain value is available.
Let`s say an email address to then find out whether the input is valid or not.
So it could be even more complex than shown here but even here we have two states and you must not forget that these states valid and invalid, don't just apply to the overall form, but to every individual input in the form and extend a sum off the states of those inputs that make up the overall form state.

Now, when a form and its inputs are invalid you might want to output input specific error messages and highlight the problematic inputs. And you also want to ensure that the form can't be submitted or saved if one or more inputs are invalid.

If the inputs are valid, though you ofcourse want to make sure
that it can be submitted and saved. Now, when we dive into showing error messages and highlighting invalid inputs things get even more complex because to question then is when to validate, when should you check the user input?
You can validate the user input when the form is submitted as a whole you can also check the value entered by a user once an input loses focus to then check what the user did enter the error and find out if it is valid and you can of course also do that on every keystroke or on every change to user makes to an input.

Now, when you validate once the form is submitted as a whole, you of course allow the user to enter a valid value before possibly warning him or her. That means if the user starts typing in let's say the email field, you don't tell the user that the entered email address is wrong before the user even had a chance of entering one. So that's good. You wait until the user is done and then you possibly show an error. So this avoids unnecessary warnings, but as a downside the feedback might come a little bit too late. If I press submit and you then tell me that something's wrong,I have to go back to that input where something was wrong and enter my value again.It's not the end of the world, but maybe not the final user experience we might want to offer. Now, when we validate the input, when it loses focus the good thing also is that we allow the user to enter a valid value before warning him or her just as when we waited for the overall form. But we already do show an error then once the user is done with that specific input. So we don't wait for the overall form submission but we just wait until the user is done with one specific input.
This can be very useful for untouched forms. So where do you user hasn't entered anything yet.The downside with this approach, however,if you only validate on losing focus is that if an input was invalid so if the user did already enter something invalid and now comes back to fix it you don't tell the user if it's now valid or not until he or she is done entering an input.
That's where on keystroke validation might be better. There you provide direct feedback to the user on whether the input is valid or not on every keystroke
but as a downside, you here warn the user before he or she even had a chance of entering valid values. So if you visit a form for the first time
and you haven't entered anything you would be greeted with tons of errors
if we only validate on keystroke because initially everything is invalid, of course and we haven't given a user any chance of entering anything valid.
If on the other hand we combine this with the other methods somehow and we only validate on keystroke if the input was invalid before then we can provide direct feedback and therefore tell the user, once the input is valid. And if this is all a little abstract, that's no problem. We're now going to explore these different approaches in great detail in this module. And we're going to see how things behave and how we can fine-tune this to come up with the best possible solution.
