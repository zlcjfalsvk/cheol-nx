import sys


def main(name):
    word = 'Mr.' + name
    return word

if __name__ == "__main__":
    argv = sys.argv
    argv = argv[argv.index("--") + 1:]
    if len(argv) < 1:
        print('Argument Error')
        print(False)
        sys.exit()
    try:
        print(main(argv[0]), flush=True)
    except Exception as err:
        print(err)
        print(False)
