	echo "\033[92m\033[1m Starting playing-engine in development mode\033[0m"
	source './parse-options.sh' $@

	tmux set-option -gq mouse-utf8 on
	tmux set-option -gq mouse-resize-pane on
	tmux set-option -gq mouse-select-pane on
	tmux set-option -gq mouse-select-window on
	tmux set-window-option -gq mode-mouse on
	tmux display-message "Mouse: ON"
	tmux new-session -d -n "playingServer"

	tmux new-window -n "meteorApp"
	tmux new-window -n "bgio"

  tmux send-keys -t "meteorApp" "cd ../userApp && meteor --settings ../config/dev/settings.json" C-m; 
  tmux send-keys -t "bgio" "cd ../gameServer && node dist/index.js" C-m; 
  
	tmux attach-session -d
	exit -1