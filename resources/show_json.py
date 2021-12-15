import sys
import json

def main(stringified_json):
	loadedJson = json.loads(stringified_json)
	loadedJson = {
		'name': loadedJson.get('name', '이름 없넹'),
		'description': loadedJson.get('description', '설명')
	}
	return json.dumps(loadedJson)


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
