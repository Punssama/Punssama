import os

while True:
	print("Do you want to shutdown?")
	print("Y/N")
	command = str(input("Your answer: "))
	if ("Y" or "yes" or "Yes" in command):
		print("computer: cya")
		os.system("shutdown /s")
		break

	else:
		print("exit!")
		break
