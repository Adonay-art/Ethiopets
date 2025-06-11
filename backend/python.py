from flask import Flask, request, jsonify
import groq
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow frontend requests

client = groq.Groq(api_key="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")

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_input = data.get("message")

    response = client.chat.completions.create(
        model="llama3-8b-8192",
        messages=[
            {"role": "system", "content": "You are a friendly and caring pet adoption assistant. You help users find the perfect pet by answering their questions about pet care, adoption tips, and matching pets with their lifestyle."},
            {"role": "user", "content": user_input}
        ]
    )

    reply = response.choices[0].message.content
    return jsonify({"reply": reply})

if __name__ == "__main__":
    app.run(port=5000)
