a = [1 ,0 ,3]
countnull = 0
countpos = 0
countneg = 0

for i in range(0,len(a)):
    if a[i] <0:
        countneg = countneg+1
    elif a[i] > 0:
        countpos = countpos+1
    else:
        countnull = countnull+1

countnull = countnull/len(a)
countpos = countpos/len(a)
countneg = countneg/len(a)

b = [countpos, countneg,countnull]
for elem in range(0,len(b)):
    print("{:.6f}".format(b[elem]))