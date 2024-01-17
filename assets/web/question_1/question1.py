graph = {
    'A': ['B', 'D', 'H'],
    'B': ['A', 'D', 'C'],
    'C': ['B', 'D', 'F'],
    'D': ['A', 'B', 'C', 'E'],
    'E': ['F', 'D', 'H'],
    'F': ['C', 'E', 'G'],
    'G': ['F', 'H'],
    'H': ['A', 'E', 'G']
}

def find_paths(graph, start, end, path=[]):
    path = path + [start]
    if start == end:
        return [path]
    if start not in graph:
        return []
    paths = []
    for node in graph[start]:
        if node not in path:
            newpaths = find_paths(graph, node, end, path)
            for newpath in newpaths:
                paths.append(newpath)
    return paths

def find_shortest_path(graph, start, end, path=[]):
    path = path + [start]
    if start == end:
        return path
    if start not in graph:
        return None
    shortest = None
    for node in graph[start]:
        if node not in path:
            newpath = find_shortest_path(graph, node, end, path)
            if newpath:
                if not shortest or len(newpath) < len(shortest):
                    shortest = newpath
    return shortest

# Test cases:
all_paths = find_paths(graph, 'A', 'H')
for path in all_paths:
    print(path)

shortest_path = find_shortest_path(graph, 'A', 'H')
print("Shortest path:", shortest_path)
