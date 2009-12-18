function show(id) {
	if (document.getElementById(id))
        document.getElementById(id).style.display = 'block';
	if (document.getElementById(id + '-show-link'))
        document.getElementById(id + '-show-link').style.display = 'none';
	if (document.getElementById(id + '-hide-link'))
        document.getElementById(id + '-hide-link').style.display = 'inline';
}

function hide(id) {
	if (document.getElementById(id))
        document.getElementById(id).style.display = 'none';
	if (document.getElementById(id + '-show-link'))
        document.getElementById(id + '-show-link').style.display = 'inline';
	if (document.getElementById(id + '-hide-link'))
        document.getElementById(id + '-hide-link').style.display = 'none';
}

