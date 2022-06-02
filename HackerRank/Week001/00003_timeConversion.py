#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'timeConversion' function below.
#
# The function is expected to return a STRING.
# The function accepts STRING s as parameter.
#

def timeConversion(s):
    # Write your code here
    stram='AM'
    strpm='PM'
    if int(s[0:2]) <=12:
        if stram in s:
            hour = int(s[0:2])
            if hour == 12:
                hour=00
            s = "{:02d}".format(hour)+s[2:]
            s = s.replace('AM','')
            return(s)
        elif strpm in s:
            hour = int(s[0:2])
            if hour == 12:
                s = "{:02d}".format(hour)+s[2:]
                s = s.replace('PM','')
                return(s)
            else:
                hour=hour+12
                if hour == 24:
                    hour=00
                s = "{:02d}".format(hour)+s[2:]
                s = s.replace('PM','')
                return(s)
            
        else:
            print('not AM or PM')
    else:
        print('not a valid hour')


    
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    result = timeConversion(s)

    fptr.write(result + '\n')

    fptr.close()
