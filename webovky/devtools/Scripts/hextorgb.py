def dofunc(input):
    count = 0
    id = 0
    mezi = ["","",""]
    rgb = ""

    ## VALIDATE INPUT FOR PROCESSING
    for i in input:
        if i == "#":
            pass
        elif(i==" "):
            pass
        else:
            count+=1
            mezi[id] += i.upper()
            if(count%2==0):
                id+=1
    ## CONVERT HEX VALUES TO DECIMAL
    for i in range(0,3):
        mezi[i] = int(mezi[i], 16)

    ## PREPARE TO RETURN RESULT
    for i in range(0,3):
        rgb += str(mezi[i]) + ","

    ## REMOVE LAST COMMA AND RETURN
    return rgb[:-1]
print(dofunc("#1a 48 4f"))