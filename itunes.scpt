JsOsaDAS1.001.00bplist00�Vscript_�iTunes = Application('iTunes')

if (state = iTunes.playerState() == "playing") {
	iTunes.currentTrack.name() + " - " + iTunes.currentTrack.artist()
} else {
	""
}                            �jscr  ��ޭ