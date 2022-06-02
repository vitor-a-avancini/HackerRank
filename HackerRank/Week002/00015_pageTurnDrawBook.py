#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'pageCount' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER n
#  2. INTEGER p
#

def pageCount(n, p):
    # Write your code here
    turn=0

    if (p==1) or (p==n):
        turn=0

    elif p/n>0.5:
        if n%2==0:
            if p%2==0:
                turn=(n-p)//2
            else:
                turn=(n-p+1)//2
        else:
            n=n-1
            if p%2==0:
                turn=(n-p)//2
            else:
                turn=(n-p+1)//2
    else:    
        if p%2 == 0:
            turn=p//2
        else:
            turn=(p-1)//2
    
    return turn

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    p = int(input().strip())

    result = pageCount(n, p)

    fptr.write(str(result) + '\n')

    fptr.close()
