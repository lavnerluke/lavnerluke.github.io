//////////////////////////////////////////////////////////////////////////
// pageFormat.js -- holds functions and vars that deal w/semester
//		info
//
// Kurt Schmidt
//
// 1/3/04
//


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
		write( "</font></i>\n" )
	}
}