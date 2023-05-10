# import json


# file = open("investigations.txt", "r")


# markov_data = {}

# lines = file.readlines()

# for line in lines:


#     words = line.split()

#     for i in range(len(words) - 1):
#         current_word = words[i]
#         next_word = words[i + 1]

#         if current_word not in markov_data:
#             markov_data[current_word] = [next_word]
#         else:
#             markov_data[current_word].append(next_word)

# with open('investigations.json', 'w') as outfile:
#     json.dump(markov_data, outfile)



def wordGenerate(path, starting_word):
        import json
        markov_data = json.load(open(path, 'r'))

        import random

        word = random.choice(markov_data[starting_word])
        
        while "." not in word:
                word = random.choice(markov_data[word])
                starting_word += f" {word}"

        return starting_word

