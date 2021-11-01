import sys


def greeting(name):
    word = 'Mr.' + name
    print(word, end='')
    sys.stdout.flush()


if __name__ == '__main__':
    greeting(sys.argv[1])
