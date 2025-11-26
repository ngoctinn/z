import asyncio
from sqlalchemy.ext.asyncio import create_async_engine
from app.core.config import settings
import sys

# Print python path to verify
print(f"Python executable: {sys.executable}")

async def test_connection():
    print(f"Testing connection to: {settings.DATABASE_URL}")
    try:
        engine = create_async_engine(settings.DATABASE_URL, echo=True)
        async with engine.connect() as conn:
            print("Connection successful!")
            result = await conn.execute("SELECT 1")
            print(f"Result: {result.scalar()}")
        await engine.dispose()
    except Exception as e:
        print(f"Connection failed: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    asyncio.run(test_connection())
