#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'caesarCipher' function below.
#
# The function is expected to return a STRING.
# The function accepts following parameters:
#  1. STRING s
#  2. INTEGER k
#

def caesarCipher(s, k):
    # Write your code here
    
    
    original=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    original_M=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    
    while k>len(original):
        k=k-len(original)
    

    s_list=list(s) 
    for letter in range(len(s_list)):
        try:
            index_b=original.index(s_list[letter])
            index_e=index_b+k
            
            if index_e >len(original)-1:
                index_e=index_e-len(original)
                
            s_list[letter]=original[index_e]
        except:
            try:
                index_b=original_M.index(s_list[letter])
                index_e=index_b+k
                
                if index_e >len(original_M)-1:
                    index_e=index_e-len(original_M)
                    
                s_list[letter]=original_M[index_e]
            except:
                s_list[letter]=s_list[letter]
    ans=("".join(s_list))
    
    return ans


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    s = input()

    k = int(input().strip())

    result = caesarCipher(s, k)

    fptr.write(result + '\n')

    fptr.close()
