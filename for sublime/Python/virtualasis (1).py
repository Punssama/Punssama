#import thu vien
from distutils.errors import UnknownFileError
from re import search
import pyttsx3
import datetime
import speech_recognition as sr
import webbrowser as wb
import os
#tao voice
vsasis = pyttsx3.init()
voice = vsasis.getProperty('voices')
vsasis.setProperty('voice',voice)
#tao ham
def speak(audio):
    print('virtual assistant: '+ audio)
    vsasis.say(audio)
    vsasis.runAndWait()
def time():
    Time=datetime.datetime.now().strftime("%H:%M:%S")
    speak(Time)

def welcome():
    hour=datetime.datetime.now().hour
    if hour >=6 and hour < 12:
        speak("Good morning sir")
    elif hour >= 12 and hour < 18:
        speak("Good afternoon sir")
    elif hour >=18 and hour < 24:
        speak("Good night sir")
    speak("Let me help you?")
def command():
    c=sr.Recognizer()
    with sr.Microphone() as source:
        c.pause_threshold=2
        audio=c.listen(source)
    try:
        query=c.recognize_google(audio,language='en')

        print("Punssama: "+ query)

    except sr.UnknownValueError:
        print("I dont know what you say, please teach me or use your keyboard!")
        query=str(input("your command: "))
    return query 
#tao lenh

if __name__ =="__main__":
         welcome()
         while True:
            query = command().lower()
            if "google" in query:
                speak("what do you want to find?")
                search=command().lower()
                url=f"https://www.google.com/search?q={search}"
                wb.get().open(url)
                speak(f'Here is your {search} on google')
            if "youtube" in query:
                speak("What do you want to find?")
                search=command().lower()
                url=f"https://www.youtube.com/search?q={search}"
                wb.get().open(url)
                speak(f"Here is your {search} on Youtube")
            if "new page" in query:
                newtab=f"https://www.google.com/"
                wb.get().open(newtab)
                speak("Opening new tab")
            if "control" in query:
                speak("What do you want me to do?")
                choose = command().lower()
                if "shutdown" in choose:
                    speak("Shut down yes or no?")
                    shutcmd=command().lower()
                    if "yes" in shutcmd:
                        os.system("Shutdown /s")
                    else:
                        speak("exit")
            if "your name" in query:
                speak("My name is VS and i am your virtual assistant")
            if "time" in query:
                time()












            if "bye" in query:
                speak("bye Punssama!")
                break
