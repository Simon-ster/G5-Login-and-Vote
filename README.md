Important --  do not merge your local branch into the master
branch without submitting a pull request for the users of 
group to review. This will ensure that the code works and
is to each members standards.

-----------------------------------------------------------

Create a voting app.

The app will be able to allow a pool of predetermined 
users the ability to vote on a subject.Voting would 
then be cut-off at a specific time.

Needs: 

1) authentication
	
		- AuthO.
		- JWT and bcrypt.
 

2) database for logging voters, votes, and subjects

		- the voters and their votes.
		- the subject being voted on and the voters 
			who participated.
		
	The subject table/model will tally the votes 
	based on the relation between table 
	and votes.

	When voting is complete, the votes will be 
	displayed, along with each voter in their
	corresponding vote column.


3) design
	
		- users should only come here to do one 
			thing, vote.
		- a form is really all that is needed
		- a description of the topic will be given
			after authentication.

-----------------------------------------------------------

It will be important to not push to the master branch until 
the code has been reviewed by everyone in the group to make 
sure that it works. To make a branch on your local machine, 
use the git branch and git checkout commands. If you need 
help, just ask.