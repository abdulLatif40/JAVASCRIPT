class student:
    __name='Ali'
    __age=22
    __grades='A'

    def __info1(self):
        print(self.__name)
    def __info2(self):
        print(self.__age)
    def __info3(self):
        print(self.__grades)

    #Setter Methods
    def setname(self,a):
        self.__name=a
    def setage(self,b):
        self.__age=b
    def setgrades(self,c):
        self.__grades=c
    def getname(self):
        return self.__age
    def getgrades(self):
        return self.__age
    def getgrades(self):
        return self.__grades

#Object Of Class
obj=student()
obj.setage('Protected att')
obj.setgrades('Private att')
print(obj.getage())
print(obj.gethands3())

print(obj.hands1)#Public
obj.hands1='Public Att'
print(obj.hands1)#Public

print(obj._hands2)#Protected
obj._hands2='Protected Att'
print(obj._hands2)#Protected

print(obj._Human__hands3)
obj._Human__hands3='Private att'
print(obj._Human__hands3)
print(obj._Human__hands3)#Private 

obj.info1()#Public
obj._info2()#Protected
obj._Human__info3()#Private
