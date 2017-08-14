- What is the PATH environment variable used for in UNIX systems?
    * - The PATH envirmonent variable is used to store directories containing programs to be executed. The PATH tells the shell where to look on the computer for a particular command when it needs to be executed.

- On a UNIX computer, how do you stop a running process?
    * - Use "ps aux" to list running processes. Take note of PID (Process ID) and use command "kill (PID)

- Which command can you use to see which homebrew packages you've installed?
    * - ```brew list```
- On a UNIX computer, how do you find the process id of a running process?
    * - ```ps aux``` and look under "PID" column.

- In a terminal, what does control-c do?
    * - Ctrl-c allows you to exit the current child process by sending a SIGINT signal from the kernel.

- What would be the result of typing the following commands?
  ```sh
  $ cd /Users/lucy      // Change directory to /Users/lucy
  $ mkdir one           // make directory named "one" in "/Users/lucy"
  $ touch alpha         // make a file named "alpha" in "/Users/lucy"
  $ cd one              //  change directory to "/Users/lucy/one"
  $ touch alpha         // makes a file names "alpha" in "/Users/lucy/one"
  $ pwd                 // Prints working directory "/Users/lucy/one"
  ```

- How do you see which environment variables are set in your shell?
    * - ```printenv```

- What keyboard shortcut do you use to perform a "Find" search in your editor?
    * - "command + F" in VSCode

- How do you see which aliases you have in your shell?
    * - ```alias``` will list any active aliases in the shell.

- When a terminal command completes, how can you tell if it was successful or not?
    * - It returns nothing unless a completion message was expressly set.

- What does your `~/.gitconfig` have in it? (paste the whole file here)
    * - 
    ```
    [user]
	name = ontoneio
	email = ontoneio.mm@gmail.com
[core]
	editor = fish
	excludesfile = /Users/ontoneio/.gitignore_global
[alias]
	co = checkout
	br = branch
	ci = commit
	st = status
    ```
- What is the difference between a relative and absolute path?
    * - Absolute paths give a fully explicit locations on a harddrive that never changes regardless of working directory. A relative path starts from a relative location to the users current working directory.

- Lets say you have the following file structure

  ```
  ~
  └── Projects
      ├── airbnb-for-llamas
      │   └── package.json
      └── facebook-for-mimes
          ├── README.md
          └── package.json
  ```

  And you were in the `facebook-for-mimes` folder. What command would you use to copy the `README.md` file to the `airbnb-for-llamas` folder?
    * - ```cp README.md ../airbnb-for-llamas/README.md```

- What keyboard shortcut do you use in your editor to quickly navigate to a file in the current project?
    * - "command + p" in VSCode.

- Give an example of a file or folder pattern you commonly add to a .gitignore file and why you add it
    * - One that is almost always added is ".DS_Store" as it is a Mac OSX system file and doesn't ever really need to be stored in our code repositories because it is specific to the local machine. 

- What are the main differences between `Array.sort` and `Array.filter` in JavaScript?
    * - `Array.sort` takes an array and an optional callback compare function. It sorts the Array in place according to the optional callbacks conditions and does not make a copy. If no callback function is provided to the sort, then it defaults to sorting by Unicode. `Array.filter` creates a new array by taking a callback function and returning the elements to a new array that pass the callback functions conditions.  