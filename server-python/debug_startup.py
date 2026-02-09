import sys
print("Script starting...", flush=True)
try:
    import config
    print("Config imported successfully.", flush=True)
    print(f"Model ID: {config.doubao_embedding_model}", flush=True)
except Exception as e:
    print(f"Import failed: {e}", flush=True)
