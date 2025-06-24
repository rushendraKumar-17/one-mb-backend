import json

# Input and output file paths
input_file = "cleaned_mapping.json"
output_file = "transformed_data.json"

# Load original JSON
with open(input_file, "r") as f:
    data = json.load(f)

# Transform each insurer object
transformed_list = []
for insurer_name, insurer_info in data.items():
    new_entry = {
        "name": insurer_name.replace(" Co. Ltd.", "").replace("Company Limited", "").strip(),
        **insurer_info
    }
    transformed_list.append(new_entry)

# Save the transformed list to a new file
with open(output_file, "w") as f:
    json.dump(transformed_list, f, indent=2)

print(f"✅ Transformed data saved to {output_file}")
