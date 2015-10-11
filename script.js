var isCSSOn = true;

function change()
{
	if (isCSSOn)
		$('link[rel="stylesheet"]').attr('disabled', 'disabled');
	else
		$('link[rel="stylesheet"]').removeAttr('disabled');

	isCSSOn = !isCSSOn;
}
