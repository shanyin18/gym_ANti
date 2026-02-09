import sys
import os
# Adjust path so we can import app modules
sys.path.append(os.path.join(os.path.dirname(__file__), 'server-python'))

from unittest.mock import MagicMock, patch
from tenacity import RetryError
from app.services.tools import DietHistoryTool

def test_retry_on_failure():
    print("Testing DietHistoryTool Retry Logic...")
    tool = DietHistoryTool()
    
    # Mock the internal logic to always raise an exception
    # Since tenacity decorates _run, we need to mock what _run calls, OR mock _run logic if we can.
    # But checking retry count on a decorated method is tricky if we mock the method itself.
    # Easier to mock `get_history_logs` which is called INSIDE _run.
    
    with patch('app.services.tools.get_history_logs') as mock_db:
        mock_db.side_effect = Exception("Database Connection Fail")
        
        try:
            # executed synchronously
            tool.run({"username": "test_user"})
            print("❌ FAILURE: Tool should have raised exception or returned error string (depending on implementation)")
        except Exception as e:
            # We expect tenacity to raise a RetryError or the original exception after retries
            print(f"Caught expected exception: {type(e).__name__}: {e}")
            
        # Verify call count
        print(f"Call count: {mock_db.call_count}")
        if mock_db.call_count == 3:
            print("✅ SUCCESS: Retried 3 times.")
        else:
            print(f"❌ FAILURE: Expected 3 retries, got {mock_db.call_count}")

if __name__ == "__main__":
    test_retry_on_failure()
