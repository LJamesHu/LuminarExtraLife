import random

with open('items.txt') as f:
    items = f.readlines()

allitems = []
for item in items:
    x = 0
    while x < int(item.split()[0]):
        allitems.append(' '.join(item.split()[1:]))
        x += 1

random.shuffle(allitems)

with open('bundles.txt', 'wb') as f:
    z = 1
    y = 0
    while (y+3) < len(allitems):
        f.write(str(z) + '. ' + ', '.join(allitems[y:y+3]) + '\n')
        y += 3
        z += 1