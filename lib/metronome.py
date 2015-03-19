from __future__ import division

# literal time between each beat
def beat(tempo):
	bps = tempo / 60
	beat = 1 / bps

	return beat

# func to get beat fraction times
def note(beat, fraction):
	fraction = beat / fraction
	return fraction