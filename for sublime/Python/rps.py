#import thu vien
import pyttsx3
import speech_recognition as sr
import random
#tao voice
opponent = pyttsx3.init()
voice= opponent.getProperty('voices')
opponent.setProperty('voice',voice)
#tao bien diem
playerscores=0
botscores=0

#def ham
def bot(audio):
    print('Opponent: '+ audio)
    opponent.say(audio)
    opponent.runAndWait()
def commander(audio):
    print('Commander: '+ audio)
    opponent.say(audio)
    opponent.runAndWait()
def invite(): 
    commander("Rock,paper,scissors?")
    commander("Do you want to play?") 
    print("say yes or no")
def command():
    p = sr.Recognizer()
    with sr.Microphone() as ear:
        p.pause_threshold=3
        audio = p.listen(ear)
    try:
        plrthr=p.recognize_google(audio,language='en')

        print("Player: "+ plrthr)
    except sr.UnknownValueError:
        print("I dont understand, please use your keyboard")
        plrthr = str(input("you choose?: "))
    return plrthr
def command1():
    print("Game_operator:say or type your answer!")
    p1 = sr.Recognizer()
    with sr.Microphone() as ear1:
        p1.pause_threshold=3
        audio = p1.listen(ear1)
    try:
        plrthr1=p1.recognize_google(audio,language='en')

        print("Player: "+ plrthr1)
    except sr.UnknownValueError:
        print("I dont understand, please use your keyboard")
        plrthr1 = str(input("You throw?: "))
    return plrthr1
def botpoint():
    global botscores
    botscores += 1
def playerpoint():
    global playerscores
    playerscores += 1
def game():
        while True:
            plrthr1 = command1().lower()
            computerthrow = random.randint(0,2)
            if computerthrow == 0:
                computer = "rock"



            if (computerthrow == 1):
                computer = "paper"


            if (computerthrow == 2):
                computer = "scissors"


            if plrthr1 == computer:
                bot(computer)
                commander("Draw!")
            else:
                if "scissors" in plrthr1:
                    if computer == "rock":
                        bot(computer)
                        commander("You lose")
                        print("Opponent: you should surrender!")
                        botpoint()
                    else:
                        bot(computer)
                        commander("You win")
                        playerpoint()

                elif "rock" in plrthr1:
                    if computer == "paper":
                        bot(computer)
                        commander("You lose")
                        print("Opponent: you should surrender!")
                        botpoint()
                    else:
                        bot(computer)
                        commander("You win")
                        playerpoint()
                elif "paper" in plrthr1:
                    if computer == "scissors":
                        bot(computer)
                        commander("You lose")
                        print("Opponent: you should surrender!")
                        botpoint()
                    else:
                        bot(computer)
                        commander("You win")
                        playerpoint()
                elif "end" in plrthr1:
                    print("Scores: " + str(playerscores) + "--" + str(botscores))
                    if playerscores >= botscores:
                        bot("Good game!")
                        bot("Bye!")
                        break
                    else:
                        bot("Bye loser!")
                        bot("Hahahahaha")
                        break
                else:
                    print("Cant regconize the command!")
#tao tro choi
if __name__ == "__main__":
    invite()
    plrthr = command().lower()
    if "yes" in plrthr:
        bot("Welcome to my game!")
        bot("Defeat me if you can")
        print("Say/type 'end' to stop the game if you dont want to play anymore!")
        print("<+>Please throw first!")
        game()
    elif "no" in plrthr:
        commander("Exit!")
    else: 
        print("Cant regconize the command!")
