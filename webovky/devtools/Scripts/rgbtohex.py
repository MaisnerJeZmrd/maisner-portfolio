def dofunc(input):
    count = 0
    id = 0
    mezi = ["", "", ""]
    hexa = "#"

    ## VALIDATE INPUT FOR PROCESSING
    for i in input:
        try:
            int(i)
        except:
            id+=1
        else:
            mezi[id] = mezi[id]+str(i)
        count+=1

    ## CONVERT STRINGS TO INTS
    for i in range(0,3):
        mezi[i] = int(mezi[i])

    ## CONVERT INTS TO HEXADECIMAL
    for i in mezi:
        mezi = (hex(i)[2:]).upper()
        if(len(mezi) == 1):
            mezi = "0"+mezi
        hexa += mezi

    ## RETURN FINAL VALUE
    return hexa

print(f"final value: #93588b, {dofunc("147,88,139")}")
print(f"final value: #5641a8, {dofunc("86,65,168")}")
print(f"final value: #1a484f, {dofunc("26,72,79")}")