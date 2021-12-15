import sys
import json


def main(stringify_json):
	loaded_json = json.loads(stringify_json)
	loaded_json = {
		'name': loaded_json.get('name', '이름 없넹'),
		'description': loaded_json.get('description', '설명')
	}
	return json.dumps(loaded_json)


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
