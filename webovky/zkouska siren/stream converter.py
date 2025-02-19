from random import randint
import math

def convertStreams(streams):
    if streams > 5000:
        if(streams > 1000000):
            return f"{math.floor(streams / 100000)/10}m"
        else:
            return f"{math.floor(streams / 100)/10}k"
    else:
        return streams


while True:
    streams = randint(1,2000000)
    input("Streams last month: "+convertStreams(streams))