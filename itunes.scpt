JsOsaDAS1.001.00bplist00�Vscript_�if (Application("System Events").applicationProcesses.byName("iTunes").exists()) {
	var iTunes = Application('iTunes');

	if (state = iTunes.playerState() == "playing") {
		iTunes.currentTrack.name() + " - " + iTunes.currentTrack.artist();
	}
}                              	 jscr  ��ޭ