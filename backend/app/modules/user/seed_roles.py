import asyncio
import sys
import os

# Add backend directory to path
sys.path.append(os.path.join(os.path.dirname(__file__), "../../../"))

from sqlmodel import select
from app.core.database import get_session
from app.modules.user.user_models import Role

DEFAULT_ROLES = [
    {"name": "admin", "description": "Quản trị viên với toàn quyền truy cập"},
    {"name": "receptionist", "description": "Lễ tân quản lý lịch hẹn và khách hàng"},
    {"name": "technician", "description": "Kỹ thuật viên thực hiện liệu trình"},
    {"name": "customer", "description": "Khách hàng đặt lịch dịch vụ"},
]

async def seed_roles():
    print("Seeding roles...")
    # Manually create session since get_session is a generator
    from app.core.database import engine
    from sqlmodel.ext.asyncio.session import AsyncSession
    from sqlalchemy.orm import sessionmaker

    async_session = sessionmaker(
        engine, class_=AsyncSession, expire_on_commit=False
    )

    async with async_session() as session:
        for role_data in DEFAULT_ROLES:
            statement = select(Role).where(Role.name == role_data["name"])
            result = await session.exec(statement)
            role = result.first()

            if not role:
                print(f"Creating role: {role_data['name']}")
                new_role = Role(**role_data)
                session.add(new_role)
            else:
                print(f"Role already exists: {role_data['name']}")

        await session.commit()

    await engine.dispose()
    print("Seeding completed.")

if __name__ == "__main__":
    asyncio.run(seed_roles())
