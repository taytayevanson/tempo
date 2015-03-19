# dependencies
import time
import config
import metronome
import tool

# shortcuts
mod = tool.modulus

# set note vars
note_4 = metronome.beat(config.tempo)
note_8 = metronome.note(note_4, 2)
note_16 = metronome.note(note_4, 4)

i = 0
m4 = 2
m8 = 8

start = time.time()

while True:
	if mod(time.time(), note_8):

		if mod(i, m8):
			print(config.out3)

		elif mod(i, m4):
			print(config.out2)
			
		else:
			print(config.out1)

		i += 1