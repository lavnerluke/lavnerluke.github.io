//////////////////////////////////////////////////////////////////////////
// pageFormat.js -- holds functions and vars that deal w/semester
//		info
//
// Kurt Schmidt
//
// 1/3/04
//

//###############  VARIABLES (for semester)  ###################

//TODO var gWithdrawalDeadline = "Friday, May 7, 2004"


//###############  FUNCTIONS  ###################################

///////////////////////////////////////////////////////////////////////////
// footer - prints bottom of page (last modified, etc)
//

function footer()
{
	var modTime = new Date( document.lastModified )

	with( document )
	{
		writeln( "<hr width='100%'/>" )
		write( "<i><font size='-1'>Last updated " )
		writeln( modTime.toLocaleDateString() )
		a = "kschmid"+"t@cs.drexe"+"l.edu"
		write( "\n<br><a href='mailto:"+a+">"+a+"</a>\n" );
		write( "</font></i>\n" )
	}
}


//////////////////////////////////////////////////////////////////////////
// pageTest - just a sanity check
//

function pageTest()
{
	document.writeln( "<p>Page test passed!</p>" )
}
