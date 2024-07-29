import subprocess

def run_cli_tool(parameters):
    print("here1    ")
    command = ['ngrok', *parameters]  # Modify this according to your CLI tool
    result = subprocess.run(command, capture_output=True, text=True)
    print("result", result)
    if result.returncode == 0:
        return result.stdout.strip()
    else:
        print("Error running CLI tool:", result.stderr)
        return None
    
parameters = ['http', '3000']  # Modify this according to your CLI tool parameters
value_from_cli = run_cli_tool(parameters)
print(value_from_cli)
if value_from_cli is not None:
    print("Value updated successfully in code file.")
else:
    print("Failed to update value in code file.")