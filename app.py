from flask import Flask, render_template, redirect, url_for
app = Flask(__name__)

#sentence = wordGenerate('markov/investigations.json', "The")

@app.route('/')
def home():
    return render_template('index.html')


if __name__ == '__main__':
  app.run(port=8080, debug=True)
