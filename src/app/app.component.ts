import { Component } from '@angular/core';
import { QuizCardComponent } from './shared/components/quiz-card/quiz-card.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

interface Quiz {
  question: string;
  correctAnswer: string;
  hint: string;
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, QuizCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' Name Game  {developed by Hoang Hai}';
  allQuizzes: Quiz[] = [
    { question: 'What animal says meow?', correctAnswer: 'Cat', hint: 'It’s a furry pet that loves yarn!' },
    { question: 'Who wears a red cape?', correctAnswer: 'Superman', hint: 'He’s a superhero who flies!' },
    { question: 'What fruit is yellow and curved?', correctAnswer: 'Banana', hint: 'Monkeys love this fruit!' },
    { question: 'What vehicle has two wheels and pedals?', correctAnswer: 'Bicycle', hint: 'You ride it in the park!' },
    { question: 'What animal has a long neck?', correctAnswer: 'Giraffe', hint: 'It eats leaves from tall trees!' },
    { question: 'What bird is known for its colorful feathers?', correctAnswer: 'Parrot', hint: 'It can talk!' },
    { question: 'What food is round and has tomato sauce?', correctAnswer: 'Pizza', hint: 'It’s sliced into triangles!' },
    { question: 'What animal swims and has fins?', correctAnswer: 'Fish', hint: 'It lives in water!' },
    { question: 'What is the king of the jungle?', correctAnswer: 'Lion', hint: 'It has a loud roar!' },
    { question: 'What fruit is red and has seeds outside?', correctAnswer: 'Strawberry', hint: 'It’s sweet and juicy!' },
    { question: 'What vehicle flies in the sky?', correctAnswer: 'Airplane', hint: 'It has wings but isn’t a bird!' },
    { question: 'What animal is black and white and loves bamboo?', correctAnswer: 'Panda', hint: 'It’s cuddly and lives in China!' },
    { question: 'What dessert is cold and comes in a cone?', correctAnswer: 'Ice Cream', hint: 'It melts in the sun!' },
    { question: 'What animal hops and has a pouch?', correctAnswer: 'Kangaroo', hint: 'It’s from Australia!' },
    { question: 'What shape has three sides?', correctAnswer: 'Triangle', hint: 'It’s pointy!' },
    { question: 'What animal is big and has a trunk?', correctAnswer: 'Elephant', hint: 'It never forgets!' },
    { question: 'What fruit is green and used in guacamole?', correctAnswer: 'Avocado', hint: 'It’s creamy and delicious!' },
    { question: 'What vehicle has sirens and helps sick people?', correctAnswer: 'Ambulance', hint: 'It’s white and red!' },
    { question: 'What bird can’t fly but runs fast?', correctAnswer: 'Ostrich', hint: 'It’s the biggest bird!' },
    { question: 'What food is long and used in spaghetti?', correctAnswer: 'Noodle', hint: 'It’s slurpy and fun!' },
    { question: 'What animal has eight legs and spins webs?', correctAnswer: 'Spider', hint: 'It catches flies!' },
    { question: 'What fruit is orange and juicy?', correctAnswer: 'Orange', hint: 'It’s terrace after its color!' },
    { question: 'What vehicle travels on rails?', correctAnswer: 'Train', hint: 'It goes choo-choo!' },
    { question: 'What animal barks and is a great pet?', correctAnswer: 'Dog', hint: 'It loves to fetch!' },
    { question: 'What food is sweet and comes from bees?', correctAnswer: 'Honey', hint: 'It’s sticky and yummy!' },
    { question: 'What animal flies and has a long beak?', correctAnswer: 'Hummingbird', hint: 'It hovers like a helicopter!' },
    { question: 'What shape has four equal sides?', correctAnswer: 'Square', hint: 'It’s like a box!' },
    { question: 'What fruit is purple and grows in bunches?', correctAnswer: 'Grape', hint: 'It’s great for juice!' },
    { question: 'What animal is slow and carries its house?', correctAnswer: 'Turtle', hint: 'It has a hard shell!' },
    { question: 'What vehicle has a siren and fights fires?', correctAnswer: 'Fire Truck', hint: 'It’s red and loud!' },
    { question: 'What animal has a horn on its nose?', correctAnswer: 'Rhinoceros', hint: 'It’s big and strong!' },
    { question: 'What food is crunchy and made from corn?', correctAnswer: 'Popcorn', hint: 'You eat it at the movies!' },
    { question: 'What bird is white and a symbol of peace?', correctAnswer: 'Dove', hint: 'It carries an olive branch!' },
    { question: 'What fruit is red and has a core?', correctAnswer: 'Apple', hint: 'Teachers love it!' },
    { question: 'What animal swings through trees?', correctAnswer: 'Monkey', hint: 'It’s cheeky and loves bananas!' },
    { question: 'What shape is round like a ball?', correctAnswer: 'Circle', hint: 'It has no corners!' },
    { question: 'What vehicle floats on water?', correctAnswer: 'Boat', hint: 'It sails on the sea!' },
    { question: 'What animal is small and has wings?', correctAnswer: 'Butterfly', hint: 'It has colorful wings!' },
    { question: 'What food is yellow and spread on bread?', correctAnswer: 'Butter', hint: 'It’s creamy and goes with jam!' },
    { question: 'What animal is green and hops?', correctAnswer: 'Frog', hint: 'It loves ponds!' },
    { question: 'What fruit is spiky and yellow?', correctAnswer: 'Pineapple', hint: 'It’s tropical and sweet!' },
    { question: 'What vehicle is yellow and picks up kids?', correctAnswer: 'School Bus', hint: 'It takes you to school!' },
    { question: 'What animal has stripes and runs fast?', correctAnswer: 'Zebra', hint: 'It’s black and white!' },
    { question: 'What food is white and comes from cows?', correctAnswer: 'Milk', hint: 'It’s great with cookies!' },
    { question: 'What bird is pink and stands on one leg?', correctAnswer: 'Flamingo', hint: 'It lives in warm places!' },
    { question: 'What shape has five points like a star?', correctAnswer: 'Star', hint: 'It shines in the sky!' },
    { question: 'What animal is big and lives in the ocean?', correctAnswer: 'Whale', hint: 'It’s the biggest animal!' },
    { question: 'What food is red and used in ketchup?', correctAnswer: 'Tomato', hint: 'It’s juicy and red!' },
    { question: 'What vehicle has a propeller and flies?', correctAnswer: 'Helicopter', hint: 'It can hover in place!' },
    { question: 'What animal has a long tail and climbs trees?', correctAnswer: 'Squirrel', hint: 'It loves nuts!' },
    { question: 'What fruit is green and has a big pit?', correctAnswer: 'Mango', hint: 'It’s sweet and tropical!' },
    { question: 'What animal is small and has a hard shell?', correctAnswer: 'Beetle', hint: 'It’s shiny and crawls!' },
    { question: 'What food is round and has holes?', correctAnswer: 'Donut', hint: 'It’s sweet with sprinkles!' },
    { question: 'What bird is known for delivering babies?', correctAnswer: 'Stork', hint: 'It has a long beak!' },
    { question: 'What shape has six sides?',correctAnswer: 'Hexagon', hint: 'It’s like a beehive cell!' },
    { question: 'What animal is pink and loves mud?', correctAnswer: 'Pig', hint: 'It oinks and rolls in dirt!' },
    { question: 'What fruit is small and blue?', correctAnswer: 'Blueberry', hint: 'It’s tiny and sweet!' },
    { question: 'What vehicle is big and carries cargo?', correctAnswer: 'Truck', hint: 'It has lots of wheels!' },
    { question: 'What animal has a shell and lives in the sea?', correctAnswer: 'Crab', hint: 'It walks sideways!' },
    { question: 'What food is green and crunchy?', correctAnswer: 'Cucumber', hint: 'It’s great in salads!' },
    { question: 'What bird is big and lays huge eggs?', correctAnswer: 'Emu', hint: 'It’s from Australia!' },
    { question: 'What shape has four sides but isn’t a square?', correctAnswer: 'Rectangle', hint: 'It’s longer on one side!' },
    { question: 'What animal is gray and has big ears?', correctAnswer: 'Donkey', hint: 'It says hee-haw!' },
    { question: 'What fruit is red and has a pit?', correctAnswer: 'Cherry', hint: 'It’s small and sweet!' },
    { question: 'What vehicle is small and has a motor?', correctAnswer: 'Motorcycle', hint: 'It’s fast and has two wheels!' },
    { question: 'What animal has spots and runs fast?', correctAnswer: 'Cheetah', hint: 'It’s the fastest land animal!' },
    { question: 'What food is yellow and cheesy?', correctAnswer: 'Cheese', hint: 'It’s great on pizza!' },
    { question: 'What bird is known for its hoot?', correctAnswer: 'Owl', hint: 'It’s awake at night!' },
    { question: 'What shape has eight sides?', correctAnswer: 'Octagon', hint: 'It’s like a stop sign!' },
    { question: 'What animal is white and fluffy?', correctAnswer: 'Sheep', hint: 'It gives us wool!' },
    { question: 'What fruit is green and sour?', correctAnswer: 'Lime', hint: 'It’s used in lemonade!' },
    { question: 'What vehicle is used to dig dirt?', correctAnswer: 'Bulldozer', hint: 'It’s big and yellow!' },
    { question: 'What animal has a long tongue and eats ants?', correctAnswer: 'Anteater', hint: 'It has a funny nose!' },
    { question: 'What food is brown and sweet?', correctAnswer: 'Chocolate', hint: 'It’s used in candy!' },
    { question: 'What bird is small and red?', correctAnswer: 'Cardinal', hint: 'It’s bright and sings!' },
    { question: 'What shape is like a stretched circle?', correctAnswer: 'Oval', hint: 'It’s like an egg!' },
    { question: 'What animal is big and has tusks?', correctAnswer: 'Walrus', hint: 'It lives in cold water!' },
    { question: 'What fruit is pink and fuzzy?', correctAnswer: 'Peach', hint: 'It’s soft and juicy!' },
    { question: 'What vehicle is used in races?', correctAnswer: 'Racecar', hint: 'It’s super fast!' },
    { question: 'What animal has a mane and is a horse?', correctAnswer: 'Horse', hint: 'It gallops fast!' },
    { question: 'What food is green and leafy?', correctAnswer: 'Lettuce', hint: 'It’s used in salads!' },
    { question: 'What bird is black and shiny?', correctAnswer: 'Crow', hint: 'It’s very smart!' },
    { question: 'What shape has five sides?', correctAnswer: 'Pentagon', hint: 'It’s like a house shape!' },
    { question: 'What animal is small and has quills?', correctAnswer: 'Hedgehog', hint: 'It’s spiky but cute!' },
    { question: 'What fruit is red and heart-shaped?', correctAnswer: 'Watermelon', hint: 'It’s big and has stripes!' },
    { question: 'What vehicle flies to space?', correctAnswer: 'Rocket', hint: 'It goes to the stars!' },
    { question: 'What animal is gray and loves to swim?', correctAnswer: 'Dolphin', hint: 'It’s playful and smart!' },
    { question: 'What food is orange and crunchy?', correctAnswer: 'Carrot', hint: 'Bunnies love it!' },
    { question: 'What bird has a long neck and is white?', correctAnswer: 'Swan', hint: 'It’s graceful on water!' },
    { question: 'What shape is like a diamond?', correctAnswer: 'Rhombus', hint: 'It’s slanted but has equal sides!' },
    { question: 'What animal is small and loves cheese?', correctAnswer: 'Mouse', hint: 'It’s tiny and squeaks!' },
    { question: 'What fruit is yellow and sour?', correctAnswer: 'Lemon', hint: 'It’s used in lemonade!' },
    { question: 'What vehicle is big and carries trash?', correctAnswer: 'Garbage Truck', hint: 'It keeps the city clean!' },
    { question: 'What animal is big and has a hump?', correctAnswer: 'Camel', hint: 'It lives in the desert!' },
    { question: 'What food is white and fluffy?', correctAnswer: 'Marshmallow', hint: 'It’s sweet and soft!' },
    { question: 'What bird is known for its blue eggs?', correctAnswer: 'Robin', hint: 'It’s a springtime bird!' },
    { question: 'What shape has seven sides?', correctAnswer: 'Heptagon', hint: 'It’s rare and cool!' },
    { question: 'What animal is green and changes color?', correctAnswer: 'Chameleon', hint: 'It blends in!' },
    { question: 'What fruit is black and grows on bushes?', correctAnswer: 'Blackberry', hint: 'It’s sweet and juicy!' },
    { question: 'What vehicle is used to plow fields?', correctAnswer: 'Tractor', hint: 'It’s big and works on farms!' },
    { question: 'What animal has a big pouch for its baby?', correctAnswer: 'Koala', hint: 'It loves eucalyptus leaves!' }
  ];

  selectedQuizzes: Quiz[] = [];

  constructor() {
    this.shuffleQuizzes();
  }

  shuffleQuizzes() {
    const shuffled = [...this.allQuizzes].sort(() => Math.random() - 0.5);
    this.selectedQuizzes = shuffled.slice(0, 5);
  }
}


