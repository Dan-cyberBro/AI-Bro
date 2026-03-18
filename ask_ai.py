import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {
            "role": "user",
            "content": "Придумай 3 креативных названия для моего проекта: AI-помощник для повседневных задач"
        }
    ]
)

print(response.choices[0].message.content)
